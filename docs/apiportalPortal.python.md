# `apiportalPortal` Submodule <a name="`apiportalPortal` Submodule" id="@cdktn/provider-awscc.apiportalPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalPortal <a name="ApiportalPortal" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal awscc_apiportal_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortal(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authorization: ApiportalPortalAuthorization,
  endpoint_configuration: ApiportalPortalEndpointConfiguration,
  portal_content: ApiportalPortalPortalContent,
  included_product_arns: typing.List[str] = None,
  logo_uri: str = None,
  rum_app_monitor_name: str = None,
  tags: IResolvable | typing.List[ApiportalPortalTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a></code> | Represents an authorization configuration for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a></code> | Represents an endpoint configuration for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.portalContent">portal_content</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a></code> | Contains the content that is visible to portal consumers including the themes, display names, and description. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.includedProductArns">included_product_arns</a></code> | <code>typing.List[str]</code> | The ARNs of the products included in the portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.logoUri">logo_uri</a></code> | <code>str</code> | The logo URI. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.rumAppMonitorName">rum_app_monitor_name</a></code> | <code>str</code> | The name of the Amazon CloudWatch RUM app monitor. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>]</code> | The tags associated with a portal. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

Represents an authorization configuration for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#authorization ApiportalPortal#authorization}

---

##### `endpoint_configuration`<sup>Required</sup> <a name="endpoint_configuration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.endpointConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

Represents an endpoint configuration for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#endpoint_configuration ApiportalPortal#endpoint_configuration}

---

##### `portal_content`<sup>Required</sup> <a name="portal_content" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.portalContent"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

Contains the content that is visible to portal consumers including the themes, display names, and description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#portal_content ApiportalPortal#portal_content}

---

##### `included_product_arns`<sup>Optional</sup> <a name="included_product_arns" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.includedProductArns"></a>

- *Type:* typing.List[str]

The ARNs of the products included in the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#included_product_arns ApiportalPortal#included_product_arns}

---

##### `logo_uri`<sup>Optional</sup> <a name="logo_uri" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.logoUri"></a>

- *Type:* str

The logo URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#logo_uri ApiportalPortal#logo_uri}

---

##### `rum_app_monitor_name`<sup>Optional</sup> <a name="rum_app_monitor_name" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.rumAppMonitorName"></a>

- *Type:* str

The name of the Amazon CloudWatch RUM app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#rum_app_monitor_name ApiportalPortal#rum_app_monitor_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>]

The tags associated with a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#tags ApiportalPortal#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putAuthorization">put_authorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putEndpointConfiguration">put_endpoint_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putPortalContent">put_portal_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetIncludedProductArns">reset_included_product_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetLogoUri">reset_logo_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetRumAppMonitorName">reset_rum_app_monitor_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authorization` <a name="put_authorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putAuthorization"></a>

```python
def put_authorization(
  authorization_config: ApiportalPortalAuthorizationAuthorizationConfig,
  fine_grained_access_control: str
) -> None
```

###### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putAuthorization.parameter.authorizationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

Exactly one of the members is set: None for no authorization, or CognitoConfig for Amazon Cognito.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#authorization_config ApiportalPortal#authorization_config}

---

###### `fine_grained_access_control`<sup>Required</sup> <a name="fine_grained_access_control" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putAuthorization.parameter.fineGrainedAccessControl"></a>

- *Type:* str

Whether fine-grained access control is enforced for the portal. No default: the template states the posture explicitly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#fine_grained_access_control ApiportalPortal#fine_grained_access_control}

---

##### `put_endpoint_configuration` <a name="put_endpoint_configuration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putEndpointConfiguration"></a>

```python
def put_endpoint_configuration(
  acm_managed: ApiportalPortalEndpointConfigurationAcmManaged = None,
  none: str = None
) -> None
```

###### `acm_managed`<sup>Optional</sup> <a name="acm_managed" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putEndpointConfiguration.parameter.acmManaged"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

Represents a domain name and certificate for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#acm_managed ApiportalPortal#acm_managed}

---

###### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putEndpointConfiguration.parameter.none"></a>

- *Type:* str

Provide no authorization for your portal. This makes your portal publicly accessible on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#none ApiportalPortal#none}

---

##### `put_portal_content` <a name="put_portal_content" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putPortalContent"></a>

```python
def put_portal_content(
  display_name: str,
  theme: ApiportalPortalPortalContentTheme,
  description: str = None
) -> None
```

###### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putPortalContent.parameter.displayName"></a>

- *Type:* str

The display name for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#display_name ApiportalPortal#display_name}

---

###### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putPortalContent.parameter.theme"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

Defines the theme for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#theme ApiportalPortal#theme}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putPortalContent.parameter.description"></a>

- *Type:* str

A description of the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#description ApiportalPortal#description}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApiportalPortalTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>]

---

##### `reset_included_product_arns` <a name="reset_included_product_arns" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetIncludedProductArns"></a>

```python
def reset_included_product_arns() -> None
```

##### `reset_logo_uri` <a name="reset_logo_uri" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetLogoUri"></a>

```python
def reset_logo_uri() -> None
```

##### `reset_rum_app_monitor_name` <a name="reset_rum_app_monitor_name" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetRumAppMonitorName"></a>

```python
def reset_rum_app_monitor_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApiportalPortal resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isConstruct"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortal.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortal.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortal.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortal.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApiportalPortal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiportalPortal to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiportalPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference">ApiportalPortalAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference">ApiportalPortalEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalArn">portal_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContent">portal_content</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference">ApiportalPortalPortalContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalId">portal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishDescription">publish_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishedAt">published_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishStatus">publish_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.statusException">status_exception</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference">ApiportalPortalStatusExceptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList">ApiportalPortalTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorizationInput">authorization_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfigurationInput">endpoint_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArnsInput">included_product_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUriInput">logo_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContentInput">portal_content_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorNameInput">rum_app_monitor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArns">included_product_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUri">logo_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorName">rum_app_monitor_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorization"></a>

```python
authorization: ApiportalPortalAuthorizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference">ApiportalPortalAuthorizationOutputReference</a>

---

##### `endpoint_configuration`<sup>Required</sup> <a name="endpoint_configuration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfiguration"></a>

```python
endpoint_configuration: ApiportalPortalEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference">ApiportalPortalEndpointConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `portal_arn`<sup>Required</sup> <a name="portal_arn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalArn"></a>

```python
portal_arn: str
```

- *Type:* str

---

##### `portal_content`<sup>Required</sup> <a name="portal_content" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContent"></a>

```python
portal_content: ApiportalPortalPortalContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference">ApiportalPortalPortalContentOutputReference</a>

---

##### `portal_id`<sup>Required</sup> <a name="portal_id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalId"></a>

```python
portal_id: str
```

- *Type:* str

---

##### `publish_description`<sup>Required</sup> <a name="publish_description" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishDescription"></a>

```python
publish_description: str
```

- *Type:* str

---

##### `published_at`<sup>Required</sup> <a name="published_at" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishedAt"></a>

```python
published_at: str
```

- *Type:* str

---

##### `publish_status`<sup>Required</sup> <a name="publish_status" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishStatus"></a>

```python
publish_status: str
```

- *Type:* str

---

##### `status_exception`<sup>Required</sup> <a name="status_exception" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.statusException"></a>

```python
status_exception: ApiportalPortalStatusExceptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference">ApiportalPortalStatusExceptionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tags"></a>

```python
tags: ApiportalPortalTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList">ApiportalPortalTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorizationInput"></a>

```python
authorization_input: IResolvable | ApiportalPortalAuthorization
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

---

##### `endpoint_configuration_input`<sup>Optional</sup> <a name="endpoint_configuration_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfigurationInput"></a>

```python
endpoint_configuration_input: IResolvable | ApiportalPortalEndpointConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

---

##### `included_product_arns_input`<sup>Optional</sup> <a name="included_product_arns_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArnsInput"></a>

```python
included_product_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logo_uri_input`<sup>Optional</sup> <a name="logo_uri_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUriInput"></a>

```python
logo_uri_input: str
```

- *Type:* str

---

##### `portal_content_input`<sup>Optional</sup> <a name="portal_content_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContentInput"></a>

```python
portal_content_input: IResolvable | ApiportalPortalPortalContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

---

##### `rum_app_monitor_name_input`<sup>Optional</sup> <a name="rum_app_monitor_name_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorNameInput"></a>

```python
rum_app_monitor_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApiportalPortalTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>]

---

##### `included_product_arns`<sup>Required</sup> <a name="included_product_arns" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArns"></a>

```python
included_product_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logo_uri`<sup>Required</sup> <a name="logo_uri" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUri"></a>

```python
logo_uri: str
```

- *Type:* str

---

##### `rum_app_monitor_name`<sup>Required</sup> <a name="rum_app_monitor_name" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorName"></a>

```python
rum_app_monitor_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalPortalAuthorization <a name="ApiportalPortalAuthorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalAuthorization(
  authorization_config: ApiportalPortalAuthorizationAuthorizationConfig,
  fine_grained_access_control: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a></code> | Exactly one of the members is set: None for no authorization, or CognitoConfig for Amazon Cognito. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.fineGrainedAccessControl">fine_grained_access_control</a></code> | <code>str</code> | Whether fine-grained access control is enforced for the portal. No default: the template states the posture explicitly. |

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.authorizationConfig"></a>

```python
authorization_config: ApiportalPortalAuthorizationAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

Exactly one of the members is set: None for no authorization, or CognitoConfig for Amazon Cognito.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#authorization_config ApiportalPortal#authorization_config}

---

##### `fine_grained_access_control`<sup>Required</sup> <a name="fine_grained_access_control" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.fineGrainedAccessControl"></a>

```python
fine_grained_access_control: str
```

- *Type:* str

Whether fine-grained access control is enforced for the portal. No default: the template states the posture explicitly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#fine_grained_access_control ApiportalPortal#fine_grained_access_control}

---

### ApiportalPortalAuthorizationAuthorizationConfig <a name="ApiportalPortalAuthorizationAuthorizationConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig(
  cognito_config: ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig = None,
  none: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.cognitoConfig">cognito_config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a></code> | The configuration for using Amazon Cognito user pools to control access to your portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.none">none</a></code> | <code>str</code> | Provide no authorization for your portal. This makes your portal publicly accessible on the web. |

---

##### `cognito_config`<sup>Optional</sup> <a name="cognito_config" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.cognitoConfig"></a>

```python
cognito_config: ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

The configuration for using Amazon Cognito user pools to control access to your portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#cognito_config ApiportalPortal#cognito_config}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.none"></a>

```python
none: str
```

- *Type:* str

Provide no authorization for your portal. This makes your portal publicly accessible on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#none ApiportalPortal#none}

---

### ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig <a name="ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig(
  app_client_id: str = None,
  user_pool_arn: str = None,
  user_pool_domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.appClientId">app_client_id</a></code> | <code>str</code> | The app client ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | The user pool ARN. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolDomain">user_pool_domain</a></code> | <code>str</code> | The user pool domain. |

---

##### `app_client_id`<sup>Optional</sup> <a name="app_client_id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.appClientId"></a>

```python
app_client_id: str
```

- *Type:* str

The app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#app_client_id ApiportalPortal#app_client_id}

---

##### `user_pool_arn`<sup>Optional</sup> <a name="user_pool_arn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

The user pool ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#user_pool_arn ApiportalPortal#user_pool_arn}

---

##### `user_pool_domain`<sup>Optional</sup> <a name="user_pool_domain" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolDomain"></a>

```python
user_pool_domain: str
```

- *Type:* str

The user pool domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#user_pool_domain ApiportalPortal#user_pool_domain}

---

### ApiportalPortalConfig <a name="ApiportalPortalConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authorization: ApiportalPortalAuthorization,
  endpoint_configuration: ApiportalPortalEndpointConfiguration,
  portal_content: ApiportalPortalPortalContent,
  included_product_arns: typing.List[str] = None,
  logo_uri: str = None,
  rum_app_monitor_name: str = None,
  tags: IResolvable | typing.List[ApiportalPortalTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a></code> | Represents an authorization configuration for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a></code> | Represents an endpoint configuration for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.portalContent">portal_content</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a></code> | Contains the content that is visible to portal consumers including the themes, display names, and description. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.includedProductArns">included_product_arns</a></code> | <code>typing.List[str]</code> | The ARNs of the products included in the portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.logoUri">logo_uri</a></code> | <code>str</code> | The logo URI. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.rumAppMonitorName">rum_app_monitor_name</a></code> | <code>str</code> | The name of the Amazon CloudWatch RUM app monitor. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>]</code> | The tags associated with a portal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.authorization"></a>

```python
authorization: ApiportalPortalAuthorization
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

Represents an authorization configuration for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#authorization ApiportalPortal#authorization}

---

##### `endpoint_configuration`<sup>Required</sup> <a name="endpoint_configuration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.endpointConfiguration"></a>

```python
endpoint_configuration: ApiportalPortalEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

Represents an endpoint configuration for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#endpoint_configuration ApiportalPortal#endpoint_configuration}

---

##### `portal_content`<sup>Required</sup> <a name="portal_content" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.portalContent"></a>

```python
portal_content: ApiportalPortalPortalContent
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

Contains the content that is visible to portal consumers including the themes, display names, and description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#portal_content ApiportalPortal#portal_content}

---

##### `included_product_arns`<sup>Optional</sup> <a name="included_product_arns" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.includedProductArns"></a>

```python
included_product_arns: typing.List[str]
```

- *Type:* typing.List[str]

The ARNs of the products included in the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#included_product_arns ApiportalPortal#included_product_arns}

---

##### `logo_uri`<sup>Optional</sup> <a name="logo_uri" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.logoUri"></a>

```python
logo_uri: str
```

- *Type:* str

The logo URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#logo_uri ApiportalPortal#logo_uri}

---

##### `rum_app_monitor_name`<sup>Optional</sup> <a name="rum_app_monitor_name" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.rumAppMonitorName"></a>

```python
rum_app_monitor_name: str
```

- *Type:* str

The name of the Amazon CloudWatch RUM app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#rum_app_monitor_name ApiportalPortal#rum_app_monitor_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApiportalPortalTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>]

The tags associated with a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#tags ApiportalPortal#tags}

---

### ApiportalPortalEndpointConfiguration <a name="ApiportalPortalEndpointConfiguration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalEndpointConfiguration(
  acm_managed: ApiportalPortalEndpointConfigurationAcmManaged = None,
  none: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.acmManaged">acm_managed</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a></code> | Represents a domain name and certificate for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.none">none</a></code> | <code>str</code> | Provide no authorization for your portal. This makes your portal publicly accessible on the web. |

---

##### `acm_managed`<sup>Optional</sup> <a name="acm_managed" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.acmManaged"></a>

```python
acm_managed: ApiportalPortalEndpointConfigurationAcmManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

Represents a domain name and certificate for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#acm_managed ApiportalPortal#acm_managed}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.none"></a>

```python
none: str
```

- *Type:* str

Provide no authorization for your portal. This makes your portal publicly accessible on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#none ApiportalPortal#none}

---

### ApiportalPortalEndpointConfigurationAcmManaged <a name="ApiportalPortalEndpointConfigurationAcmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged(
  certificate_arn: str = None,
  domain_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.certificateArn">certificate_arn</a></code> | <code>str</code> | The certificate ARN. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.domainName">domain_name</a></code> | <code>str</code> | The domain name. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

The certificate ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#certificate_arn ApiportalPortal#certificate_arn}

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#domain_name ApiportalPortal#domain_name}

---

### ApiportalPortalPortalContent <a name="ApiportalPortalPortalContent" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalPortalContent(
  display_name: str,
  theme: ApiportalPortalPortalContentTheme,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.displayName">display_name</a></code> | <code>str</code> | The display name for the portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.theme">theme</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a></code> | Defines the theme for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.description">description</a></code> | <code>str</code> | A description of the portal. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#display_name ApiportalPortal#display_name}

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.theme"></a>

```python
theme: ApiportalPortalPortalContentTheme
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

Defines the theme for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#theme ApiportalPortal#theme}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#description ApiportalPortal#description}

---

### ApiportalPortalPortalContentTheme <a name="ApiportalPortalPortalContentTheme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalPortalContentTheme(
  custom_colors: ApiportalPortalPortalContentThemeCustomColors
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme.property.customColors">custom_colors</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a></code> | Represents custom colors for a published portal. |

---

##### `custom_colors`<sup>Required</sup> <a name="custom_colors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme.property.customColors"></a>

```python
custom_colors: ApiportalPortalPortalContentThemeCustomColors
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

Represents custom colors for a published portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#custom_colors ApiportalPortal#custom_colors}

---

### ApiportalPortalPortalContentThemeCustomColors <a name="ApiportalPortalPortalContentThemeCustomColors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalPortalContentThemeCustomColors(
  accent_color: str,
  background_color: str,
  error_validation_color: str,
  header_color: str,
  navigation_color: str,
  text_color: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.accentColor">accent_color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#accent_color ApiportalPortal#accent_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.backgroundColor">background_color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#background_color ApiportalPortal#background_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.errorValidationColor">error_validation_color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#error_validation_color ApiportalPortal#error_validation_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.headerColor">header_color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#header_color ApiportalPortal#header_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.navigationColor">navigation_color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#navigation_color ApiportalPortal#navigation_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.textColor">text_color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#text_color ApiportalPortal#text_color}. |

---

##### `accent_color`<sup>Required</sup> <a name="accent_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.accentColor"></a>

```python
accent_color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#accent_color ApiportalPortal#accent_color}.

---

##### `background_color`<sup>Required</sup> <a name="background_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#background_color ApiportalPortal#background_color}.

---

##### `error_validation_color`<sup>Required</sup> <a name="error_validation_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.errorValidationColor"></a>

```python
error_validation_color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#error_validation_color ApiportalPortal#error_validation_color}.

---

##### `header_color`<sup>Required</sup> <a name="header_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.headerColor"></a>

```python
header_color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#header_color ApiportalPortal#header_color}.

---

##### `navigation_color`<sup>Required</sup> <a name="navigation_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.navigationColor"></a>

```python
navigation_color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#navigation_color ApiportalPortal#navigation_color}.

---

##### `text_color`<sup>Required</sup> <a name="text_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#text_color ApiportalPortal#text_color}.

---

### ApiportalPortalStatusException <a name="ApiportalPortalStatusException" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalStatusException()
```


### ApiportalPortalTags <a name="ApiportalPortalTags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#key ApiportalPortal#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#value ApiportalPortal#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#key ApiportalPortal#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#value ApiportalPortal#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference <a name="ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetAppClientId">reset_app_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolArn">reset_user_pool_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolDomain">reset_user_pool_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_client_id` <a name="reset_app_client_id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetAppClientId"></a>

```python
def reset_app_client_id() -> None
```

##### `reset_user_pool_arn` <a name="reset_user_pool_arn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolArn"></a>

```python
def reset_user_pool_arn() -> None
```

##### `reset_user_pool_domain` <a name="reset_user_pool_domain" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolDomain"></a>

```python
def reset_user_pool_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientIdInput">app_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArnInput">user_pool_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomainInput">user_pool_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientId">app_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomain">user_pool_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_client_id_input`<sup>Optional</sup> <a name="app_client_id_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientIdInput"></a>

```python
app_client_id_input: str
```

- *Type:* str

---

##### `user_pool_arn_input`<sup>Optional</sup> <a name="user_pool_arn_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArnInput"></a>

```python
user_pool_arn_input: str
```

- *Type:* str

---

##### `user_pool_domain_input`<sup>Optional</sup> <a name="user_pool_domain_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomainInput"></a>

```python
user_pool_domain_input: str
```

- *Type:* str

---

##### `app_client_id`<sup>Required</sup> <a name="app_client_id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientId"></a>

```python
app_client_id: str
```

- *Type:* str

---

##### `user_pool_arn`<sup>Required</sup> <a name="user_pool_arn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

---

##### `user_pool_domain`<sup>Required</sup> <a name="user_pool_domain" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomain"></a>

```python
user_pool_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

---


### ApiportalPortalAuthorizationAuthorizationConfigOutputReference <a name="ApiportalPortalAuthorizationAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.putCognitoConfig">put_cognito_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetCognitoConfig">reset_cognito_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetNone">reset_none</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cognito_config` <a name="put_cognito_config" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.putCognitoConfig"></a>

```python
def put_cognito_config(
  app_client_id: str = None,
  user_pool_arn: str = None,
  user_pool_domain: str = None
) -> None
```

###### `app_client_id`<sup>Optional</sup> <a name="app_client_id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.putCognitoConfig.parameter.appClientId"></a>

- *Type:* str

The app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#app_client_id ApiportalPortal#app_client_id}

---

###### `user_pool_arn`<sup>Optional</sup> <a name="user_pool_arn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.putCognitoConfig.parameter.userPoolArn"></a>

- *Type:* str

The user pool ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#user_pool_arn ApiportalPortal#user_pool_arn}

---

###### `user_pool_domain`<sup>Optional</sup> <a name="user_pool_domain" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.putCognitoConfig.parameter.userPoolDomain"></a>

- *Type:* str

The user pool domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#user_pool_domain ApiportalPortal#user_pool_domain}

---

##### `reset_cognito_config` <a name="reset_cognito_config" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetCognitoConfig"></a>

```python
def reset_cognito_config() -> None
```

##### `reset_none` <a name="reset_none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetNone"></a>

```python
def reset_none() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfig">cognito_config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfigInput">cognito_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.noneInput">none_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.none">none</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cognito_config`<sup>Required</sup> <a name="cognito_config" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfig"></a>

```python
cognito_config: ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference</a>

---

##### `cognito_config_input`<sup>Optional</sup> <a name="cognito_config_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfigInput"></a>

```python
cognito_config_input: IResolvable | ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

---

##### `none_input`<sup>Optional</sup> <a name="none_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.noneInput"></a>

```python
none_input: str
```

- *Type:* str

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.none"></a>

```python
none: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalPortalAuthorizationAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

---


### ApiportalPortalAuthorizationOutputReference <a name="ApiportalPortalAuthorizationOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.putAuthorizationConfig">put_authorization_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_config` <a name="put_authorization_config" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.putAuthorizationConfig"></a>

```python
def put_authorization_config(
  cognito_config: ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig = None,
  none: str = None
) -> None
```

###### `cognito_config`<sup>Optional</sup> <a name="cognito_config" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.putAuthorizationConfig.parameter.cognitoConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

The configuration for using Amazon Cognito user pools to control access to your portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#cognito_config ApiportalPortal#cognito_config}

---

###### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.putAuthorizationConfig.parameter.none"></a>

- *Type:* str

Provide no authorization for your portal. This makes your portal publicly accessible on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#none ApiportalPortal#none}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfigInput">authorization_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControlInput">fine_grained_access_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControl">fine_grained_access_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfig"></a>

```python
authorization_config: ApiportalPortalAuthorizationAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigOutputReference</a>

---

##### `authorization_config_input`<sup>Optional</sup> <a name="authorization_config_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfigInput"></a>

```python
authorization_config_input: IResolvable | ApiportalPortalAuthorizationAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

---

##### `fine_grained_access_control_input`<sup>Optional</sup> <a name="fine_grained_access_control_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControlInput"></a>

```python
fine_grained_access_control_input: str
```

- *Type:* str

---

##### `fine_grained_access_control`<sup>Required</sup> <a name="fine_grained_access_control" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControl"></a>

```python
fine_grained_access_control: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalPortalAuthorization
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

---


### ApiportalPortalEndpointConfigurationAcmManagedOutputReference <a name="ApiportalPortalEndpointConfigurationAcmManagedOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetDomainName">reset_domain_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetDomainName"></a>

```python
def reset_domain_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalPortalEndpointConfigurationAcmManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

---


### ApiportalPortalEndpointConfigurationOutputReference <a name="ApiportalPortalEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.putAcmManaged">put_acm_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetAcmManaged">reset_acm_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetNone">reset_none</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_acm_managed` <a name="put_acm_managed" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.putAcmManaged"></a>

```python
def put_acm_managed(
  certificate_arn: str = None,
  domain_name: str = None
) -> None
```

###### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.putAcmManaged.parameter.certificateArn"></a>

- *Type:* str

The certificate ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#certificate_arn ApiportalPortal#certificate_arn}

---

###### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.putAcmManaged.parameter.domainName"></a>

- *Type:* str

The domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#domain_name ApiportalPortal#domain_name}

---

##### `reset_acm_managed` <a name="reset_acm_managed" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetAcmManaged"></a>

```python
def reset_acm_managed() -> None
```

##### `reset_none` <a name="reset_none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetNone"></a>

```python
def reset_none() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManaged">acm_managed</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference">ApiportalPortalEndpointConfigurationAcmManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDefaultDomainName">portal_default_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDomainHostedZoneId">portal_domain_hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManagedInput">acm_managed_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.noneInput">none_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.none">none</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acm_managed`<sup>Required</sup> <a name="acm_managed" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManaged"></a>

```python
acm_managed: ApiportalPortalEndpointConfigurationAcmManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference">ApiportalPortalEndpointConfigurationAcmManagedOutputReference</a>

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `portal_default_domain_name`<sup>Required</sup> <a name="portal_default_domain_name" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDefaultDomainName"></a>

```python
portal_default_domain_name: str
```

- *Type:* str

---

##### `portal_domain_hosted_zone_id`<sup>Required</sup> <a name="portal_domain_hosted_zone_id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDomainHostedZoneId"></a>

```python
portal_domain_hosted_zone_id: str
```

- *Type:* str

---

##### `acm_managed_input`<sup>Optional</sup> <a name="acm_managed_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManagedInput"></a>

```python
acm_managed_input: IResolvable | ApiportalPortalEndpointConfigurationAcmManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

---

##### `none_input`<sup>Optional</sup> <a name="none_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.noneInput"></a>

```python
none_input: str
```

- *Type:* str

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.none"></a>

```python
none: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalPortalEndpointConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

---


### ApiportalPortalPortalContentOutputReference <a name="ApiportalPortalPortalContentOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalPortalContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.putTheme">put_theme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_theme` <a name="put_theme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.putTheme"></a>

```python
def put_theme(
  custom_colors: ApiportalPortalPortalContentThemeCustomColors
) -> None
```

###### `custom_colors`<sup>Required</sup> <a name="custom_colors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.putTheme.parameter.customColors"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

Represents custom colors for a published portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#custom_colors ApiportalPortal#custom_colors}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.theme">theme</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference">ApiportalPortalPortalContentThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.themeInput">theme_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.theme"></a>

```python
theme: ApiportalPortalPortalContentThemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference">ApiportalPortalPortalContentThemeOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `theme_input`<sup>Optional</sup> <a name="theme_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.themeInput"></a>

```python
theme_input: IResolvable | ApiportalPortalPortalContentTheme
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalPortalPortalContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

---


### ApiportalPortalPortalContentThemeCustomColorsOutputReference <a name="ApiportalPortalPortalContentThemeCustomColorsOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColorInput">accent_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColorInput">background_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColorInput">error_validation_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColorInput">header_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColorInput">navigation_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColorInput">text_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColor">accent_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColor">background_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColor">error_validation_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColor">header_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColor">navigation_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColor">text_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accent_color_input`<sup>Optional</sup> <a name="accent_color_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColorInput"></a>

```python
accent_color_input: str
```

- *Type:* str

---

##### `background_color_input`<sup>Optional</sup> <a name="background_color_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColorInput"></a>

```python
background_color_input: str
```

- *Type:* str

---

##### `error_validation_color_input`<sup>Optional</sup> <a name="error_validation_color_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColorInput"></a>

```python
error_validation_color_input: str
```

- *Type:* str

---

##### `header_color_input`<sup>Optional</sup> <a name="header_color_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColorInput"></a>

```python
header_color_input: str
```

- *Type:* str

---

##### `navigation_color_input`<sup>Optional</sup> <a name="navigation_color_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColorInput"></a>

```python
navigation_color_input: str
```

- *Type:* str

---

##### `text_color_input`<sup>Optional</sup> <a name="text_color_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColorInput"></a>

```python
text_color_input: str
```

- *Type:* str

---

##### `accent_color`<sup>Required</sup> <a name="accent_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColor"></a>

```python
accent_color: str
```

- *Type:* str

---

##### `background_color`<sup>Required</sup> <a name="background_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

---

##### `error_validation_color`<sup>Required</sup> <a name="error_validation_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColor"></a>

```python
error_validation_color: str
```

- *Type:* str

---

##### `header_color`<sup>Required</sup> <a name="header_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColor"></a>

```python
header_color: str
```

- *Type:* str

---

##### `navigation_color`<sup>Required</sup> <a name="navigation_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColor"></a>

```python
navigation_color: str
```

- *Type:* str

---

##### `text_color`<sup>Required</sup> <a name="text_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalPortalPortalContentThemeCustomColors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

---


### ApiportalPortalPortalContentThemeOutputReference <a name="ApiportalPortalPortalContentThemeOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalPortalContentThemeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors">put_custom_colors</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_colors` <a name="put_custom_colors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors"></a>

```python
def put_custom_colors(
  accent_color: str,
  background_color: str,
  error_validation_color: str,
  header_color: str,
  navigation_color: str,
  text_color: str
) -> None
```

###### `accent_color`<sup>Required</sup> <a name="accent_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors.parameter.accentColor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#accent_color ApiportalPortal#accent_color}.

---

###### `background_color`<sup>Required</sup> <a name="background_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors.parameter.backgroundColor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#background_color ApiportalPortal#background_color}.

---

###### `error_validation_color`<sup>Required</sup> <a name="error_validation_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors.parameter.errorValidationColor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#error_validation_color ApiportalPortal#error_validation_color}.

---

###### `header_color`<sup>Required</sup> <a name="header_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors.parameter.headerColor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#header_color ApiportalPortal#header_color}.

---

###### `navigation_color`<sup>Required</sup> <a name="navigation_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors.parameter.navigationColor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#navigation_color ApiportalPortal#navigation_color}.

---

###### `text_color`<sup>Required</sup> <a name="text_color" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors.parameter.textColor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#text_color ApiportalPortal#text_color}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColors">custom_colors</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference">ApiportalPortalPortalContentThemeCustomColorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.logoUploadedAt">logo_uploaded_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColorsInput">custom_colors_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_colors`<sup>Required</sup> <a name="custom_colors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColors"></a>

```python
custom_colors: ApiportalPortalPortalContentThemeCustomColorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference">ApiportalPortalPortalContentThemeCustomColorsOutputReference</a>

---

##### `logo_uploaded_at`<sup>Required</sup> <a name="logo_uploaded_at" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.logoUploadedAt"></a>

```python
logo_uploaded_at: str
```

- *Type:* str

---

##### `custom_colors_input`<sup>Optional</sup> <a name="custom_colors_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColorsInput"></a>

```python
custom_colors_input: IResolvable | ApiportalPortalPortalContentThemeCustomColors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalPortalPortalContentTheme
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

---


### ApiportalPortalStatusExceptionOutputReference <a name="ApiportalPortalStatusExceptionOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalStatusExceptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.exception">exception</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException">ApiportalPortalStatusException</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exception`<sup>Required</sup> <a name="exception" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.exception"></a>

```python
exception: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.internalValue"></a>

```python
internal_value: ApiportalPortalStatusException
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException">ApiportalPortalStatusException</a>

---


### ApiportalPortalTagsList <a name="ApiportalPortalTagsList" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiportalPortalTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApiportalPortalTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>]

---


### ApiportalPortalTagsOutputReference <a name="ApiportalPortalTagsOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_portal

apiportalPortal.ApiportalPortalTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalPortalTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>

---



